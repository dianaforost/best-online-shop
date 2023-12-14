import { GenderSection } from "components/GenderSection/GenderSection";

export const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 100,
      }}
    >
      <p>Online store under development ...</p>
      <GenderSection />
    </div>
  );
};
