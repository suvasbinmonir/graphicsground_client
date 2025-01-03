import useRequirement from "../../hooks/useRequirement";

const Requirement = () => {
  const [requirement] = useRequirement();
  console.log(requirement);
  return <div className="min-h-screen"></div>;
};

export default Requirement;
