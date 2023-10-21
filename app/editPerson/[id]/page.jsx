import EditPersonForm from "@/components/EditPersonForm";

const getPersonById = async (id) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/people/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch person");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditPerson = async ({ params }) => {
  const { id } = params;
  const { person } = await getPersonById(id);
  const { fullname, ci } = person;
  return <EditPersonForm id={id} fullname={fullname} ci={ci} />;
};

export default EditPerson;
