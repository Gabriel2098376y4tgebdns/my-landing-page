create or replace function get_resumo_vendas_mensal()
returns table (
  mes text,
  total_pedidos int,
  total_vendas numeric
)
language sql
security definer
as $$
select
  to_char(created_at, 'YYYY-MM') as mes,
  count(*) as total_pedidos,
  sum(valor_total) as total_vendas
from pedidos
group by 1
order by 1;
$$;
