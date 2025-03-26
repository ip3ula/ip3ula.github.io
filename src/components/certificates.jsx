const Certificates = () => {
  const Certificate = ({ title, institution, link }) => {
      const isLinkedIn = institution.toLowerCase() === "linkedin";

      const handleDownload = () => {
          const fileName = `${title.replace(/\s+/g, "_").toLowerCase()}.pdf`;
          const filePath = `/certificates/${fileName}`;

          const anchor = document.createElement("a");
          anchor.href = filePath;
          anchor.download = fileName;
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
      };

      return (
          <div id="certificates" className="w-[80vw] xl:w-100 h-30 bg-stone-950 rounded border-l-4 border-yellow-300 text-white p-3">
              <h1 className="font-bold text-2xl">{title}</h1>
              <p className="ml-2">{institution}</p>
              <div className="flex justify-end gap-2">
                  {link && (
                      <button
                          onClick={() => window.open(link, "_blank")}
                          className="bg-stone-800 text-white px-4 py-2 rounded-lg mt-1 w-20 text-sm hover:bg-yellow-300 hover:text-stone-950"
                      >
                          Show
                      </button>
                  )}
                  {isLinkedIn && (
                      <button
                          onClick={handleDownload}
                          className="bg-stone-800 text-white px-4 py-2 rounded-lg mt-1 w-20 text-sm hover:bg-yellow-300 hover:text-stone-950"
                      >
                          Show
                      </button>
                  )}
              </div>
          </div>
      );
  };

  return (
      <div className="p-8 pt-13">
          <h1 className="text-4xl font-bold">Certificates</h1>
          <p>Here are some of the certificates I have earned.</p>
          <div className="flex flex-wrap justify-center gap-5 pt-10 xl:justify-start">
              <Certificate
                  title="Full Stack Open"
                  institution="University Of Helsinki"
                  link="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/5c3fa58ea26924e96aef3a55b6a646aa"
              />
              <Certificate
                  title="Responsive Web Design"
                  institution="Free Code Camp"
                  link="https://www.freecodecamp.org/certification/iP3ula/responsive-web-design"
              />
              <Certificate title="Tailwind" institution="Linkedin" />
              <Certificate title="React" institution="Linkedin" />
              <Certificate title="Javascript" institution="Linkedin" />
          </div>
      </div>
  );
};

export default Certificates;
