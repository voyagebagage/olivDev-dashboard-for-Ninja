import { Pagination } from "semantic-ui-react";

export const PaginationShortCentered = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Pagination
      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  </div>
);

export const PaginationLong = () => (
  <div style={{ display: "flex", justifyContent: "flex-end" }}>
    <Pagination defaultActivePage={5} totalPages={10} />
  </div>
);
