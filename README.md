<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [xxx-component](#xxx-component)
  - [creative feature](#creative-feature)
- [usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## xxx-component

react-infinite-scroll-hooks

### creative feature

> ✅ react-infinite-scroll-hooks

## usage

```
import useInfiniteScroll from 'react-infinite-scroll-hooks'

const [pageIndex, setPageIndex, pageTotal, setPageTotal] = useInfiniteScroll(
    '.add-profit-mesage-content',
    '.add-profit-message-list-loading'
  )

useEffect(() => {
    request({
      api: 'xxx',
      data: {
        pageIndex: pageIndex,
        pageSize: 10
      }
    })
      .then(res => {
        if (res.data) {
          setPageTotal(res.data.totalPage)
          // do something
        }
      })
      .catch(err => {
        // exception handler
      })
  }, [pageIndex, setPageTotal])

const getLoading = (pageTotal, pageIndex) => {
    if (pageIndex < pageTotal) {
      return <div className="add-profit-message-list-loading"></div>
    }
  }

const getList = ()=>{
  // show list
}

return (
  <div className={'content ' + (showEmpty ? 'f-dn' : '')}>
    {getList(data)}
    {getLoading(pageTotal, pageIndex)}
  </div>
)

```
