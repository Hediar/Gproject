import { StringLiteral } from 'typescript';

declare global {
  interface OperationData {
    service: string;
    target: number[];
    terminal: number[];
  }

  type ServiceLevel = Record<string, number>;

  interface ServiceData {
    service: string;
    level: ServiceLevel;
  }
}
