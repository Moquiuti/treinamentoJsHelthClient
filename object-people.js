const client = {
    firtsName: "Leandro",
    lastsName: "Moquiuti",
    age: 34,
    cpf: "10293847561",
    email: "leandro@dominio.com",
  };
  
  console.log(
    `The name of client is ${client["firtsName"]} and has ${client["age"]} yeas old.`
  );
  
  const chaves = ["firtsName", "age", "cpf", "email", "height"];
  
  chaves.forEach((chave) => {
    console.log(`The key ${chave} has value ${client[chave]}`);
  });