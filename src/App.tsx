import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "./Cards"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json");
      setData(result.data);
      console.log(result.data)
    };

    fetchData();
  }, []);

  return (
    <div className="row" style={{ marginTop: "2rem" }}>
      {data.slice(0, 3).map((item: any) => {
        let topicName = "";

        if (item._embedded && item._embedded['wp:term']) {
          const topicTerm = item._embedded['wp:term'].find((term: any) => term[0] && term[0].taxonomy === 'topic');

          if (topicTerm && topicTerm[0]) {
            topicName = topicTerm[0].name;
          }
        }

        return (

          <div className="col-4">
            <Card title={item.title.rendered}
              imageUrl={item.featured_media}
              imageAlt={item.title.rendered}
              topic={topicName}
              authorName={item._embedded?.author?.[0]?.name}
              authorUrl={item._embedded?.author?.[0]?.link}
              createdOn={item.date}
              entryType={item._embedded?.['wp:term']?.[0]?.[0]?.name}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
