json.array! @new_message do |message|
  json.id message.id
  json.name message.user.name
  json.content message.content
  json.image message.image.url
  json.created_at Time.now.to_s(:datetime)
end
