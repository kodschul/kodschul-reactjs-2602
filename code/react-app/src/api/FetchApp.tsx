import { useEffect, useState } from "react";

type ICharacter = {
  id: string;
  name: string;
  image: string;

  [key: string]: any;
};

const FetchApp = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <div style={styles.main}>
      <h1>Characters</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {characters.length > 0 ? (
          characters.map((character: ICharacter) => (
            <Character name={character.name} avatar={character.image} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

type CharacterProps = {
  name: string;
  avatar: string;
};

const Character = (props: CharacterProps) => {
  return (
    <div
      style={{
        width: 100,
        display: "flex",
        flexDirection: "column",
        background: "rgb(38, 76, 173)",
        marginTop: 10,
        justifyContent: "center",
      }}
    >
      <img src={props.avatar} width={100} />
      {props.name}
    </div>
  );
};

const styles: any = {
  main: {
    minHeight: "100vh",
    width: "100vqw",
    color: "white",
    background: "rgb(0, 0, 46)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default FetchApp;
