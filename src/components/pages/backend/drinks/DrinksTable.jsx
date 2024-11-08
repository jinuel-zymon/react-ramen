import { Archive, ArchiveRestore, FilePenLine, Plus, Search, Trash } from 'lucide-react'
import React from 'react'
import NoData from '../partials/icons/NoData'
import ServerError from '../partials/icons/ServerError'
import LoaderTable from '../partials/LoaderTable'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import DrinksModalAdd from './DrinksModalAdd'
import { StoreContext } from '@/components/store/storeContext'
import { useInfiniteQuery } from '@tanstack/react-query'
import { queryDataInfinite } from '@/components/helpers/queryDataInfinite'


const DrinksTable = () => {
  

  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  // const { ref, inView } = useInView();


  const {
    data: result,
    error,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["drinks", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v1/drinks/search`, // search endpoint
        `/v1/drinks/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, id: "" } // search value
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });



  return (
    <>
    
    <div className="m-8">
    <div className="flex justify-between items-center">
      <form action="">
        <div className="input-wrap relative">
          <input
            type="text"
            placeholder="keyword"
            className="bg-primary px-2 py-1 placeholder:opacity-30 outline-none border border-transparent focus:border-accent !pl-8 rounded-md !text-dark"
          />
          <Search
            className="absolute top-2 left-1.5 opacity-25"
            size={20}
          />
        </div>
      </form>
      <button className="btn btn-accent">
        <Plus size={14} /> Add New
      </button>
    </div>


    <div className="table_wrapper bg-primary p-4 mt-5 rounded-md relative">
      {/* <SpinnerTable/> */}
       <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Title</td>
            <td>Price</td>
            <td>Category</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>


        <tbody>
         
            <tr>
              <td colSpan="100%">
               
                  <LoaderTable count={30} cols={6} />
           
                  <NoData />
               
              </td>
            </tr>
       


         
            <tr>
              <td colSpan="100%" className="p-10">
                <ServerError />
              </td>
            </tr>
         


       
                  <tr >
                    <td>1. </td>
                    <td>Ramen 1 </td>
                    <td>200 </td>
                    <td>Shoyo Tonkatsu</td>
                    <td>
                      true
                    </td>
                    <td>
                      <ul className="table-action">
                        <li>
                            <button
                                type="button"
                                data-tooltip="Edit"
                            >
                                <FilePenLine size={14} />
                            </button>
                        </li>
                        <li>
                           
                            <button
                                type="button"
                                data-tooltip="Archive"
                            >
                                <Archive size={14} />
                            </button>
                        </li>
                        <li>
                           
                            <button
                                type="button"
                                data-tooltip="Restore"
                            >
                                <ArchiveRestore size={14} />
                            </button>
                        </li>
                        <li>
                           
                            <button
                                type="button"
                                data-tooltip="Delete"
                            >
                                <Trash size={14} />
                            </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
        </tbody>
      </table>
    </div>
  </div>

{/* <DrinksModalAdd/> */}
    </>


  )
}


export default DrinksTable


