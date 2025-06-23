const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  textColor ="text-black"
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  textColor?: String
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
<h2 className={`mb-4 text-3xl font-bold !leading-tight dark:text-white sm:text-4xl md:text-[45px] ${textColor}`}>
{title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
