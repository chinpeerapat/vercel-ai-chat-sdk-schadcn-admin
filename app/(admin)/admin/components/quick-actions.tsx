import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export interface QuickAction {
  id: number;
  header: string;
  type: string;
  status: string;
  target: string;
  limit: string;
  reviewer: string;
  href?: string;
}

export function QuickActions({ actions }: { actions: QuickAction[] }) {
  return (
    <div className="px-4 lg:px-6 space-y-4">
      <h2 className="text-lg font-semibold">Quick Actions</h2>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Limit</TableHead>
              <TableHead>Reviewer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {actions.map((action) => (
              <TableRow key={action.id}>
                <TableCell>
                  {action.href ? (
                    <Link href={action.href} className="font-medium hover:underline">
                      {action.header}
                    </Link>
                  ) : (
                    action.header
                  )}
                </TableCell>
                <TableCell>{action.type}</TableCell>
                <TableCell>{action.status}</TableCell>
                <TableCell>{action.target}</TableCell>
                <TableCell>{action.limit}</TableCell>
                <TableCell>{action.reviewer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
