import Pagination from "react-bootstrap/Pagination"

interface PageNavigateProps {
  total: number
  current: number
  onChangePage: (page: number) => void
  limitPerPage: number
}

export const PageNavigate = ({
  total,
  current,
  onChangePage,
  limitPerPage,
}: PageNavigateProps) => {
  let isPageNumberOutOfRange = false
  const totalPages = Math.floor(total / limitPerPage)

  const pageNumbers = [...new Array(totalPages)].map((_, index) => {
    const pageNumber = index + 1
    const isPageNumberFirst = pageNumber === 1
    const isPageNumberLast = pageNumber === totalPages
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - current) <= 1

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => onChangePage(pageNumber)}
          active={pageNumber === current}
        >
          {pageNumber}
        </Pagination.Item>
      )
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true
      return <Pagination.Ellipsis key={pageNumber} className="muted" />
    }

    return null
  })

  return (
    <div className="container d-flex justify-content-center p-2">
      <Pagination>
        <Pagination.First
          key="first"
          onClick={() => onChangePage(1)}
          disabled={current === 1 ? true : false}
        />
        <Pagination.Prev
          key="prev"
          onClick={() => onChangePage(current - 1)}
          disabled={current === 1 ? true : false}
        />
        {pageNumbers}
        <Pagination.Next
          key="next"
          onClick={() => onChangePage(current + 1)}
          disabled={current === totalPages ? true : false}
        />
        <Pagination.Last
          key="last"
          onClick={() => onChangePage(totalPages)}
          disabled={current === totalPages ? true : false}
        />
      </Pagination>
    </div>
  )
}
