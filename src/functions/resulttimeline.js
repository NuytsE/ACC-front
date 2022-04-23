import React from "react";

export default function ResultTimeline(props) {
  const displayResults = (props) => {
    const { results } = props;
    if (results.length > 0) {
      return (
      results.map((result, index) => {
        console.log(result)
        console.log('index', index)
        return (
          <div className="result" key={result}>
            <div className="batid">{result.batid}</div>
            <div className="message">{result[index].message}</div>
          </div>
        );
      })
      );
    } else {
      return <h3>'complies'</h3>;
    }
  };

  return <> {displayResults(props)}</>;
}
