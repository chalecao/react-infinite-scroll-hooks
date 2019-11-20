"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 无限滚动分页更新组件
 * @param scrollContainerCls: 滚动容器元素的class选择器
 * @param loadingElCls: loading元素的class选择器
 * @returns [pageIndex, setPageIndex, pageTotal, setPageTotal]，pageIndex:当前页面，pageTotal总页数
 */
exports.default = (function (scrollContainerCls, loadingElCls) {
    var _a = react_1.useState(1), pageIndex = _a[0], setPageIndex = _a[1];
    var _b = react_1.useState(1), pageTotal = _b[0], setPageTotal = _b[1];
    react_1.useEffect(function () {
        var observer, timer, loadingEl;
        if (pageIndex <= pageTotal) {
            timer = setTimeout(function () {
                loadingEl = document.querySelector(loadingElCls);
                if (loadingEl) {
                    observer = new IntersectionObserver(function (entries) {
                        if (entries[0].intersectionRatio > 0) {
                            console.log('setPageIndex');
                            setPageIndex(function (before) { return before + 1; });
                            if (pageIndex >= pageTotal) {
                                loadingEl && observer.unobserve(loadingEl);
                            }
                        }
                    }, {
                        root: document.querySelector(scrollContainerCls),
                        threshold: 0.000001,
                        rootMargin: '50px 0px'
                    });
                    observer.observe(loadingEl);
                }
            }, 100);
        }
        return function () {
            timer && clearTimeout(timer);
            observer && loadingEl && observer.unobserve(loadingEl);
        };
    }, [pageIndex, pageTotal, scrollContainerCls, loadingElCls]);
    return [pageIndex, setPageIndex, pageTotal, setPageTotal];
});
