import { project } from 'common/stores';
import { Writer } from 'common/connection';

export const exit = () => Writer.exit();

export const collapseAll = () => project.collapseAll();