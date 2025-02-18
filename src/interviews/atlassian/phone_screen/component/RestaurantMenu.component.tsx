import React, { useState, useEffect } from 'react';
import { fetchData, tabs } from '../tabs'

export function MenuContent({ results }: {results: any }) {
  console.log(results)

  if (!results) {
    return null;
  }
  
  return (
      <ul>
        {results.map((item: any) => {
          return (
            <li>
              <input type="checkbox" aria-label={item.id} />
              {item.id}
            </li>  
          )
        })}
      </ul>
  );
}

export function RestaurantMenu() {
  const items = Object.entries(tabs);
  const params = new URLSearchParams(window.location.search)
  const [tabId, setTabState] = useState(params.get('tabId') ?? '' )
  const [results, setResults] = useState(null)

  console.log(tabId)

  function handleTabClick(value: string) {
    console.log(value)

    setTabState(value)

    // @TODO: set url

    const newUrlParams = new URLSearchParams();
    newUrlParams.set('tabId', value);

    console.log(newUrlParams.get('tabId'))

    // @ts-ignore
    window.location.search = newUrlParams;
  }

  useEffect(() => {
    if (tabId) {
      fetchData(tabId).then(result => {
        setResults(result)
      });
    }
  }, [tabId]);

  // const content = tabId

  return (
    <>
      <nav>
        <ul>
          {items.map((item) => <li onClick={(e) => handleTabClick(item[0])}>{item[1].title}</li>)}
        </ul>
      </nav>
      <MenuContent results={results} />
    </>
  )
}