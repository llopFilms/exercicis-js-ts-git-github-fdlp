import { FC, useEffect } from "react";

const widgetResources: FC = () => {
  const { user } = getAuth();
  const { slug } = useParams();

  useEffect(() => {
    if (!user) {
      return;
    }

    const getData = fetch("url/user + slug")
			.then((response) => {
				if (!response.ok) throw new Error(response.statusText); // si peta treu error
				else { // Si funciona....
					const data = response.json();
					console.log(data); // pre veure què arriba
					return data;
				}
			})
		
		getData();
	}, []);
	
	return !getData ? <p>No hi ha res</p>: <ul>llista....</ul>
};


