import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Edit, Trash2, ImageOff } from 'lucide-react';
import { toast } from 'react-toastify';

interface Member {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface TeamMember extends Member {
  role: string;
}

interface Alumni {
  _id: string;
  name: string;
  designation: string;
  batch: string;
  image: string;
}

interface Event {
  _id: string;
  title: string;
  date: string;
  description: string;
  address: string;
  location: string;
  timings: string;
  images: string[];
}

const API_URL = 'http://localhost:3001/api';
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

const AdminPanel = () => {
  const [advisoryData, setAdvisoryData] = useState<Member[]>([]);
  const [teamData, setTeamData] = useState<TeamMember[]>([]);
  const [alumniData, setAlumniData] = useState<Alumni[]>([]);
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Member | TeamMember | Alumni | Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    designation: '',
    batch: '',
    title: '',
    date: '',
    address: '',
    location: '',
    timings: '',
    image: null as File | null,
    images: [] as File[]
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('advisory');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [advisoryResponse, teamResponse, alumniResponse, eventsResponse] = await Promise.all([
        fetch(`${API_URL}/advisoryCommittee`),
        fetch(`${API_URL}/libraryTeam`),
        fetch(`${API_URL}/alumni`),
        fetch(`${API_URL}/events`)
      ]);

      if (!advisoryResponse.ok || !teamResponse.ok || !alumniResponse.ok || !eventsResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const [advisoryData, teamData, alumniData, eventsData] = await Promise.all([
        advisoryResponse.json(),
        teamResponse.json(),
        alumniResponse.json(),
        eventsResponse.json()
      ]);

      setAdvisoryData(advisoryData);
      setTeamData(teamData);
      setAlumniData(alumniData);
      setEventsData(eventsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === ADMIN_USERNAME && loginForm.password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      fetchData();
    } else {
      toast.error('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setAdvisoryData([]);
    setTeamData([]);
    setAlumniData([]);
    setEventsData([]);
  };

  const handleCreate = () => {
    setCurrentItem(null);
    setFormData({
      name: '',
      role: '',
      description: '',
      designation: '',
      batch: '',
      title: '',
      date: '',
      address: '',
      location: '',
      timings: '',
      image: null,
      images: []
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: Member | TeamMember | Alumni | Event) => {
    setCurrentItem(item);
    if ('title' in item) {
      // Event type
      setFormData({
        ...formData,
        title: item.title,
        date: new Date(item.date).toISOString().split('T')[0],
        description: item.description,
        address: item.address,
        location: item.location,
        timings: item.timings,
        images: []
      });
    } else {
      // Other types
      setFormData({
        ...formData,
        name: item.name,
        role: 'role' in item ? item.role : '',
        description: 'description' in item ? item.description : '',
        designation: 'designation' in item ? item.designation : '',
        batch: 'batch' in item ? item.batch : '',
        image: null
      });
    }
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      let endpoint;
      switch (activeTab) {
        case 'advisory':
          endpoint = 'advisoryCommittee';
          break;
        case 'team':
          endpoint = 'libraryTeam';
          break;
        case 'alumni':
          endpoint = 'alumni';
          break;
        case 'events':
          endpoint = 'events';
          break;
        default:
          throw new Error('Invalid tab');
      }
      
      const response = await fetch(`${API_URL}/${endpoint}/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete ${activeTab} item`);
      }
      
      toast.success(`${activeTab} item deleted successfully`);
      fetchData();
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error(`Failed to delete ${activeTab} item`);
    }
  };

  const handleDeleteEventImage = async (eventId: string, filename: string) => {
    try {
      const response = await fetch(`${API_URL}/events/${eventId}/images/${filename}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete image');
      }
      
      toast.success('Image deleted successfully');
      fetchData();
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Failed to delete image');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    if (activeTab === 'events') {
      formDataToSend.append('title', formData.title);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('timings', formData.timings);
      formData.images.forEach((image) => {
        formDataToSend.append('images', image);
      });
    } else {
      formDataToSend.append('name', formData.name);
      if (activeTab === 'team') {
        formDataToSend.append('role', formData.role);
        formDataToSend.append('description', formData.description);
      } else if (activeTab === 'advisory') {
        formDataToSend.append('description', formData.description);
      } else if (activeTab === 'alumni') {
        formDataToSend.append('designation', formData.designation);
        formDataToSend.append('batch', formData.batch);
      }
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
    }

    try {
      let endpoint;
      switch (activeTab) {
        case 'advisory':
          endpoint = 'advisoryCommittee';
          break;
        case 'team':
          endpoint = 'libraryTeam';
          break;
        case 'alumni':
          endpoint = 'alumni';
          break;
        case 'events':
          endpoint = 'events';
          break;
        default:
          throw new Error('Invalid tab');
      }

      const id = currentItem ? (activeTab === 'events' ? currentItem._id : currentItem.name) : '';
      const url = currentItem ? `${API_URL}/${endpoint}/${encodeURIComponent(id)}` : `${API_URL}/${endpoint}`;
      const method = currentItem ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Failed to save ${activeTab} item`);
      }

      toast.success(`${activeTab} item ${currentItem ? 'updated' : 'created'} successfully`);
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error('Error saving:', error);
      toast.error(`Failed to save ${activeTab} item`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      if (name === 'images' && fileInput.files) {
        setFormData(prev => ({ ...prev, images: Array.from(fileInput.files || []) }));
      } else {
        setFormData(prev => ({ ...prev, [name]: fileInput.files ? fileInput.files[0] : null }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={loginForm.username}
            onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
            className="mb-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            className="mb-2"
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="advisory">Advisory Committee</TabsTrigger>
          <TabsTrigger value="team">Library Team</TabsTrigger>
          <TabsTrigger value="alumni">Alumni</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="advisory">
          <Button onClick={handleCreate} className="mb-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Member
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advisoryData.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <img src={`http://localhost:3001${item.image}`} alt={item.name} className="w-16 h-16 object-cover" />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item.name)} className="ml-2">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="team">
          <Button onClick={handleCreate} className="mb-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Team Member
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamData.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <img src={`http://localhost:3001${item.image}`} alt={item.name} className="w-16 h-16 object-cover" />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item.name)} className="ml-2">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="alumni">
          <Button onClick={handleCreate} className="mb-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Alumni
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alumniData.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.designation}</TableCell>
                  <TableCell>{item.batch}</TableCell>
                  <TableCell>
                    <img src={`http://localhost:3001${item.image}`} alt={item.name} className="w-16 h-16 object-cover" />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item.name)} className="ml-2">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="events">
          <Button onClick={handleCreate} className="mb-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Event
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Timings</TableHead>
                <TableHead>Images</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {eventsData.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.timings}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {item.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={`http://localhost:3001${image}`}
                            alt={`Event ${index + 1}`}
                            className="w-16 h-16 object-cover"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute -top-2 -right-2"
                            onClick={() => handleDeleteEventImage(item._id, image.split('/').pop() || '')}
                          >
                            <ImageOff className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item._id)} className="ml-2">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentItem ? `Edit ${activeTab} Item` : `Add New ${activeTab} Item`}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            {activeTab === 'events' ? (
              <>
                <Input
                  name="title"
                  placeholder="Event Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  name="timings"
                  placeholder="Timings"
                  value={formData.timings}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  type="file"
                  name="images"
                  onChange={handleInputChange}
                  multiple
                  accept="image/*"
                  className="mb-2"
                />
              </>
            ) : (
              <>
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                {activeTab === 'team' && (
                  <>
                    <Input
                      name="role"
                      placeholder="Role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="mb-2"
                    />
                    <Textarea
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="mb-2"
                    />
                  </>
                )}
                {activeTab === 'advisory' && (
                  <Textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mb-2"
                  />
                )}
                {activeTab === 'alumni' && (
                  <>
                    <Input
                      name="designation"
                      placeholder="Designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="mb-2"
                    />
                    <Input
                      name="batch"
                      placeholder="Batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      className="mb-2"
                    />
                  </>
                )}
                <Input
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  accept="image/*"
                  className="mb-2"
                />
              </>
            )}
            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;