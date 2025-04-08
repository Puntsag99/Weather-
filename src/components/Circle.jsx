import { Images } from "lucide-react";

export const Circle = () => {
  const circle = [
    {
      name: "Cirlce",
      size: "140px",
      imageUrl: "/img/Group.png , /img/Vector.png",
    },

    {
      name: "Cirlce",
      size: "340px",
    },
    {
      name: "Cirlce",
      size: "540px",
    },
    {
      name: "Cirlce",
      size: "940px",
    },
  ];

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {circle.map((item, index) => {
        return (
          <div
            key={index}
            className="absolute  border-1 border-[#FFF] rounded-full "
            style={{
              width: item.size,
              height: item.size,
              left: `calc(-${item.size} / 2)`,
              top: `calc(-${item.size} / 2)`,
            }}
          />
        );
      })}
    </div>
  );
};
