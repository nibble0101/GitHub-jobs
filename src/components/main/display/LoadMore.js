import React from "react";

export default function LoadMore(props) {
  return (
    <div className="button-wrapper">
      <button onClick = {props.pageHandle}> Load more jobs... </button>
    </div>
  );
}
