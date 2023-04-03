import { Pagination } from "antd";

const PaginationCast = ({PaginationChange, card, current, size, PerPageChange}) => {
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

export default PaginationCast