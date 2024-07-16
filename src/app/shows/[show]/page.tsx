// import { GET } from './route';

const Shows = async ({ params }: { params: { show: string } }) => {
  // const response = await GET();
  console.log('Params', params);
  // const test = await fetch(`/shows/${params.show}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log('Data', data));

  return (
    <div>
      <h1>Shows Page</h1>
    </div>
  );
};

export default Shows;
