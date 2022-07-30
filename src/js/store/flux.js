const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getContacts: () => {
        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/camila_contact_list"
        )
          .then((response) => response.json())
          .then((result) => getStore(setStore({ contacts: result })))
          .catch((error) => console.log("error", error));
      },

      addContact: ({ fullName, email, address, phone }) => {
        console.log({ fullName, email, address, phone });
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullName,
            email: email,
            agenda_slug: "camila_contact_list",
            address: address,
            phone: phone,
          }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("error");
            }
          })
          .then(() => {
            getActions().getContacts();
          })
          .catch((error) => console.log("error", error));
      },

      editContact: (contact, id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${id}`, {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            getData();
          })
          .catch((error) => console.log("error", error));
      },

      deleteContact: (id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            getData();
          })
          .catch((error) => console.log("error", error));
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
