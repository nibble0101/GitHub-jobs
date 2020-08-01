import React from "react";

export default function Search(props) {
  return (
    <section className="search">
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          onChange={props.handleChange}
          name="language"
          placeholder="Enter Language"
        />
        <input type="submit" value="search" />
      </form>
    </section>
  );
}
