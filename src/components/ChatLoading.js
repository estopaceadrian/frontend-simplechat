import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

const ChatLoading = () => {
  return (
    <Stack>
      <Stack>
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
      </Stack>
    </Stack>
  );
};

export default ChatLoading;
