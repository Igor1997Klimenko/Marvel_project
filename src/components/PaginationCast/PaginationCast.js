import { Pagination } from "antd";

const PaginationCast = ({setSize, setCurrent, card, current, size}) => {
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(card.length / value);
    if (current > newPerPage) {
        setCurrent(newPerPage);
    }
  }

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize)
}
  return (
    <Pagination
      showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
      onChange={PaginationChange}
      total={card.length}
      current={current}
      pageSize={size}
      showSizeChanger={true}
      onShowSizeChange={PerPageChange}
      showQuickJumper={true}
    />
  )
}

export default PaginationCast;