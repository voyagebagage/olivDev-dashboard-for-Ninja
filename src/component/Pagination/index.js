import { Pagination } from "semantic-ui-react";
// import { useState } from "react";

export const PaginationShortCentered = ({
  maxPages,
  setFrom,
  limit,
  from,
  targetPage,
  activePage,
  setTargetPage,
}) => {
  console.log("===========IN PAGE===========");
  // console.log(maxPages, "----++++-++--==---maxP");

  return (
    <div className="dFlex-center">
      <Pagination
        activePage={targetPage}
        defaultActivePage={1}
        boundaryRange={undefined}
        ellipsisItem={maxPages >= targetPage + 5 ? targetPage + 5 : null}
        firstItem={targetPage < 4 ? null : 1}
        lastItem={null}
        siblingRange={0}
        totalPages={maxPages}
        onPageChange={(event, pageInfo) => {
          activePage = pageInfo.activePage;
          // setTargetPage(pageInfo.activePage);
          setTargetPage(activePage);
          // setFrom(limit * (targetPage - 1));
          console.log("=========ON CHANGE===========");
          console.log(pageInfo.activePage, "active page");
          console.log(from, limit, targetPage, "from, limit, targetPage");
          // console.log(event.target.value, "EVENT");
        }}
        // nextItem={next}
      />
    </div>
  );
};

export const PaginationLong = () => (
  <div className="dFlex-fEnd">
    <Pagination defaultActivePage={5} totalPages={10} />
  </div>
);
