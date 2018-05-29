class EventPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    true
  end

  def update?
    record.block.story.user == user
  end

  def destroy?
    record.block.story.user == user
  end
end
