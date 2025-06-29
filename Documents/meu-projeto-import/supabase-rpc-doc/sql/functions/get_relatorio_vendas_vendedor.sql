create or replace function get_relatorio_vendas_vendedor()
returns table (
  id_pedido int,
  quantidade int,
  created_at timestamp
)
language sql
security definer
as $$
select
  p.id_pedido,
  p.quantidade,
  p.created_at
from pedidos p
join vendedores v on v.user_id = auth.uid()
where p.id_vendedor = v.id_vendedor;
$$;
