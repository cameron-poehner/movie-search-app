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
  };
  return (
    <div className="sm:w-full bg-black h-20 grid grid-cols-4 justify-items-center items-center">
      <Link className="justify-self-start mx-10" href="/">
        <Button>OMDB</Button>
      </Link>
      <form className="w-full col-span-2 sm:w-1" onSubmit={handleSubmit}>
        <Input
          name="search"
          type="search"
          onChange={handleChange}
          placeholder="Search your favorite movies"
          value={search}
        />
      </form>
    </div>
  );
};
export default Navbar;
