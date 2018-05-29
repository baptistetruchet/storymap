class BlockPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    true
  end

  def update?
    record.story.user == user
  end

  def destroy?
    record.story.user == user
  end
end
