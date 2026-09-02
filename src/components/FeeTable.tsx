import { formatThb, type FeeTable as FeeTableData } from "@/lib/fees";

type FeeTableProps = { table: FeeTableData };

export function FeeTable({ table }: FeeTableProps) {
  return (
    <section className="feeSection" id={table.id} aria-labelledby={`${table.id}-title`}>
      <div className="shell split">
        <div>
          <h2 id={`${table.id}-title`}>{table.title}</h2>
          <p className="feeDescription">{table.description}</p>
          {table.notes.map((note) => <p className="feeNote" key={note}>{note}</p>)}
        </div>
        <div className="tableScroll">
          <table className="feeTable">
            <thead>
              <tr><th scope="col">{table.columns[0]}</th><th scope="col">{table.columns[1]}</th></tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.label}><th scope="row">{row.label}</th><td>{formatThb(row.amount)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
