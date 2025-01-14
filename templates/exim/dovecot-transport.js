dovecot_delivery:
  driver = pipe
  # -d makes a lookup. needs the unix listener in dovecot 10-master.conf
  command = /usr/lib/dovecot/dovecot-lda -d $local_part_data@$domain_data
#  message_prefix =
  message_suffix =
  # log_output
  log_fail_output
  delivery_date_add
  envelope_to_add
  return_path_add
  user = vmail
  group = vmail
  umask = 077
  temp_errors = 64 : 69 : 70: 71 : 72 : 73 : 74 : 75 : 78
