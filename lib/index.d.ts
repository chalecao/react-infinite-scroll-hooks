import React from 'react';
declare const _default: (scrollContainerCls: string, loadingElCls: string) => (number | React.Dispatch<React.SetStateAction<number>>)[];
/**
 * 无限滚动分页更新组件
 * @param scrollContainerCls: 滚动容器元素的class选择器
 * @param loadingElCls: loading元素的class选择器
 * @returns [pageIndex, setPageIndex, pageTotal, setPageTotal]，pageIndex:当前页面，pageTotal总页数
 */
export default _default;
