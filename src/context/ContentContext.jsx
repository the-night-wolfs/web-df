import { useEffect, useState, createContext } from "react";

export const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    content: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseDynamic, responseStatic] = await Promise.all([
          fetch("../src/data/DynamicContent/DynamicContent.json"),
          fetch("../src/data/StaticContent/StaticContent.json"),
        ]);

        if (!responseStatic.ok || !responseDynamic.ok) {
          throw new Error("There has been an error while fetching data");
        }

        const [dynamicData, staticData] = await Promise.all([
          responseDynamic.json(),
          responseStatic.json(),
        ]);

        setState({
          loading: false,
          content: {
            staticContent: staticData,
            dynamicContent: dynamicData,
          },
          error: null,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({
          loading: false,
          content: {
            staticContent: [],
            dynamicContent: [],
          },
          error: error.message,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <ContentContext.Provider value={{ state }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
