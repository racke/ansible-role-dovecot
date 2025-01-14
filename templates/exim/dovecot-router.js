dovecot_route:
  local_parts = {{ dovecot_users | join(' : ') }}
  driver = accept
  domains = {{ dovecot_domains | join(' : ') }}
  debug_print = "R: piping to dovecote"
  transport = dovecot_delivery
