<?php
/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

namespace PrestaShop\PrestaShop\Core\Domain\TaxRulesGroup\ValueObject;

use PrestaShop\PrestaShop\Core\Domain\TaxRulesGroup\Exception\TaxRuleConstraintException;

/**
 * Provides tax rule behavior id
 */
class BehaviorId
{
    const THIS_TAX_ONLY = 0;
    const COMBINED = 1;
    const ONE_AFTER_ANOTHER = 2;

    /**
     * @var int
     */
    private $id;

    /**
     * @param int $id
     *
     * @throws TaxRuleConstraintException
     */
    public function __construct(int $id)
    {
        $this->assertBehaviorValueIsValid($id);
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getValue(): int
    {
        return $this->id;
    }

    /**
     * @param int $value
     *
     * @throws TaxRuleConstraintException
     */
    private function assertBehaviorValueIsValid(int $value): void
    {
        $allowedBehaviorValues = [self::THIS_TAX_ONLY, self::COMBINED, self::ONE_AFTER_ANOTHER];

        if (!in_array($value, $allowedBehaviorValues)) {
            throw new TaxRuleConstraintException(
                sprintf('Invalid tax rule behavior id "%s".', var_export($value, true)),
                TaxRuleConstraintException::INVALID_BEHAVIOR_ID
            );
        }
    }
}
