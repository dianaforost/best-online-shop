import { Button, ButtonGray } from './FilterPagination.styled';

export const FilterPagination = ({ total, page, handlePageChange }) => {
  return (
    <>
      {Array.from({ length: total }).map((_, index) => {
        const range = 2;
        const start = Math.max(0, page - range);
        const end = Math.min(total - 1, page + range);

        if (index === start && start > 0) {
          return <span key="startEllipsis">...</span>;
        }

        if (index >= start && index <= end) {
          return (
            <li key={index}>
              {page === index ? (
                <Button onClick={() => handlePageChange(index)}>
                  {index + 1}
                </Button>
              ) : (
                <ButtonGray onClick={() => handlePageChange(index)}>
                  {index + 1}
                </ButtonGray>
              )}
            </li>
          );
        }

        if (index === end + 1 && end < total - 4) {
          return <span key="endEllipsis">...</span>;
        }

        if (index === total - 1) {
          return (
            <li key={index}>
              {page === index ? (
                <Button onClick={() => handlePageChange(index)}>
                  {index + 1}
                </Button>
              ) : (
                <ButtonGray onClick={() => handlePageChange(index)}>
                  {index + 1}
                </ButtonGray>
              )}
            </li>
          );
        }

        return null;
      })}
    </>
  );
};
