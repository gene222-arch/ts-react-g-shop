import { FC } from 'react';
import { Access } from './Access';
import { Path } from './Path';

export type Route = {
    key: string,
    path: Path,
    name: string,
    component: FC,
    access?: Access | undefined,
    isPrivate: boolean
};