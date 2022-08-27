/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import Link from 'next/link';
import { Button } from '@mantine/core';

function LinkButton() {
  return (
    <Link href="/hello" passHref>
      <Button component="a">Next link button</Button>
    </Link>
  )
}

export default LinkButton;