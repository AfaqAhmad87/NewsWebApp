import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

function Cards() {
  const [news, setnews] = useState([]);
  const [data, setdata] = useState(true);
  const [value1, setvalue] = useState("");
  const fetchData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${value1}&apiKey=6c4bcd68f0024b9dba5644ea013ed0fa`
    )
      .then((res) => res.json())
      .then((valu) => {
        setnews(valu?.articles);

        setvalue("");
        setdata(false);
      })
      .catch((error) => console.log("error"));
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  console.log(news);
  console.log(value1);
  // if (data) {
  //   return (
  //     <>
  //       <div className="d-flex justify-content-center pt-[260px]">
  //         <div className="spinner-border" role="status">
  //           <span className="sr-only">Loading...</span>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  return (
    <>
      <div className="form-inline flex flex-row gap-2 lg:p-2 sm:mt-3">
        <input
          className="form-control  w-[100px] sm:h-12 "
          placeholder="Search by short name e.g America is us"
          onChange={(e) => setvalue(e.target.value)}
          value={value1}
        />
        <button
          className="btn btn-outline-success  w-[100px] sm: "
          type="submit"
          onClick={fetchData}
        >
          Search
        </button>
      </div>

      {/* <input
        type="text"
        onChange={(e) => setvalue(e.target.value)}
        value={value1}
      />
      <button onClick={fetchData}>button</button> */}
      <main className="w-[100%]">
        <div className=" sm:grid sm:grid-cols-1 sm:gap-3 sm:pl-[26px] lg:grid lg:grid-cols-3 w-[90%] m-auto lg:gap-y-5   ">
          {news.map((ele) => {
            return (
              <Card style={{ width: "18rem" }} id="cards" className="">
                <Card.Img variant="top" src={ele?.urlToImage} />
                <Card.Body>
                  <Card.Title>{ele?.title}</Card.Title>
                  <Card.Text>{ele?.content}</Card.Text>
                  <button class="button-85" role="button">
                    <a
                      href={ele?.url}
                      target="_blank"
                      className="text-zinc-200 decoration-slate-50 no-underline"
                    >
                      {" "}
                      Click For More
                    </a>
                  </button>{" "}
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Cards;
