create or replace function atualizar_estoque_ao_pedir()
returns trigger as $$
begin
  update produtos
  set estoque = estoque - NEW.quantidade
  where id = NEW.produto_id;
  return NEW;
end;
$$ language plpgsql;

create trigger trg_atualizar_estoque
after insert on itens_pedido
for each row
execute procedure atualizar_estoque_ao_pedir();
