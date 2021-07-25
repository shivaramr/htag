import React, { memo } from "react";
import TopNav from "./subComponents/TopNav/TopNav";
import Footer from "./subComponents/Footer/Footer";
import SearchBar from "./subComponents/Search/SearchBar";
import FormFields from "../Forms/FormFields";
import style from "./style.module.css";

const index = memo(() => {
  return (
    <div className={style.home}>
      <TopNav />
      <label>
        A marketplace for conversations, mentorships, and performances.
      </label>
      <SearchBar />
      <FormFields />
      <Footer />
    </div>
  );
});

export default index;
