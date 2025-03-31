import React, { useEffect, useState } from "react";
import {
  ListContainer,
  ListTitleSection,
  LoadingBox,
} from "../styles/ContentListStyle";
import ListContent from "./ListContent";
import { useInView } from "react-intersection-observer";

export default function ContentList() {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      description: `${i + 1}번째 리스트의 내용`,
    }))
  );
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasMore) {
      loadMoreItems();
    }
  }, [inView]);

  const loadMoreItems = () => {
    setTimeout(() => {
      if (items.length >= 100) {
        setHasMore(false);
        return;
      }
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => ({
          id: prev.length + i + 1,
          description: `${prev.length + i + 1}번째 리스트의 내용`,
        })),
      ]);
    }, 1000);
  };

  return (
    <ListContainer>
      <ListTitleSection>컨텐츠 큐레이션 제목</ListTitleSection>
      {items.map((item) => (
        <ListContent key={item} item={item} />
      ))}
      {hasMore && <LoadingBox ref={ref}>Loading...</LoadingBox>}
    </ListContainer>
  );
}
