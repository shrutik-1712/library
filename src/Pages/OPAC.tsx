import { Button } from "@/components/ui/button"

const OPAC = () => (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">OPAC Library</h2>
      <p>Access our Online Public Access Catalog to search for books and resources.</p>
      <div className="mt-4">
        <input type="text" placeholder="Search for books..." className="p-2 border rounded mr-2" />
        <Button>Search</Button>
      </div>
    </div>
  );

  export default OPAC;