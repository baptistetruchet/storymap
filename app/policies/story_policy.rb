class StoryPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(published: true)
    end
  end

  def show?
    scope.where(id: record.id, published: true).exists? || (scope.where(id: record.id) && record.user == user)
  end

  def edit_story_details?
    record.user == user
  end

  def create?
    true
  end

  def update?
    record.user == user
  end

  def publish?
    update?
  end

  def unpublish?
    update?
  end

  def destroy?
    record.user == user
  end
end
