import GET_PERSON_DETAILS from './data';

const Page = async ({ params }: { params: { person: string } }) => {
  const { results } = await GET_PERSON_DETAILS(params.person);
  return (
    <div>
      <p>Hello People!</p>
    </div>
  );
};
export default Page;
