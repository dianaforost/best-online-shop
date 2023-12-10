import { GenderSection } from "components/GenderSection/GenderSection";
import { ProductComponent } from "components/ProductComponent/ProductComponent";

export const MainPage = () => {
  const item = {
    id: 12,
    title: "Жіночі спортивні штани джогери-фіолетовий",
    description: "940 ₴",
  };
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
      <div style={{ display: "flex", gap: 10 }}>
        <ProductComponent item={item} />
        <ProductComponent item={item} />
        <ProductComponent item={item} />
      </div>
    </div>
  );
};
