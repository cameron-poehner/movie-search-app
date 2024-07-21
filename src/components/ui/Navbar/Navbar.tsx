'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleChange = (event: SyntheticEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;
    console.log(value);
    setSearch(value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push(`/search/${search}`);
    setSearch('');
  };
  return (
    <nav className="bg-neutral-900 h-14 flex items-center md:grid md:grid-cols-6 md:h-16 xl:h-20">
      <Link className="mx-2 xl:mx-6 " href="/">
        <Button type="button" className="bg-neutral-100">
          OMDB
        </Button>
      </Link>
      <form
        className="w-7/12 mx-1 md:col-span-4 md:w-full"
        onSubmit={handleSubmit}
      >
        <Input
          name="search"
          type="search"
          onChange={handleChange}
          placeholder="Search your favorite movies"
          value={search}
        />
      </form>
    </nav>
  );
};
export default Navbar;
