# -*- encoding: utf-8 -*-
# stub: factory_bot_rails 4.11.1 ruby lib

Gem::Specification.new do |s|
  s.name = "factory_bot_rails"
  s.version = "4.11.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Joe Ferris"]
  s.date = "2018-09-07"
  s.description = "factory_bot_rails provides integration between\n    factory_bot and rails 3 or newer (currently just automatic factory definition\n    loading)"
  s.email = "jferris@thoughtbot.com"
  s.homepage = "https://github.com/thoughtbot/factory_bot_rails"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.1"
  s.summary = "factory_bot_rails provides integration between factory_bot and rails 3 or newer"

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>, [">= 3.0.0"])
      s.add_runtime_dependency(%q<factory_bot>, ["~> 4.11.1"])
    else
      s.add_dependency(%q<railties>, [">= 3.0.0"])
      s.add_dependency(%q<factory_bot>, ["~> 4.11.1"])
    end
  else
    s.add_dependency(%q<railties>, [">= 3.0.0"])
    s.add_dependency(%q<factory_bot>, ["~> 4.11.1"])
  end
end
